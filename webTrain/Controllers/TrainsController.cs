using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using webTrain.Model;
using Microsoft.AspNetCore.Mvc;

namespace webTrain.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TrainsController : ControllerBase
    {
        BdContext db = new BdContext();      

        [HttpGet("gettrainstation/{TrainNumber}")]
        [Obsolete]
        public List<Station> GetTrainStation([FromRoute] int trainNumber)
        {
            List<Station> Stations = new List<Station>();       
            var filter = new BsonDocument("trainNumber", trainNumber); // все остановки только для переданного номера поезда
            var ff =  db.Trains.Find(filter).ToList();
            foreach (var collection in ff) {
                var d = collection["station"];
                foreach (var i in d.AsBsonArray)
                {
                    var St = new Station
                    {
                        arrivalTime = i.AsBsonDocument["arrivalTime"].AsNullableDateTime,
                        departureTime = i.AsBsonDocument["departureTime"].AsNullableDateTime,
                        nameStation = i.AsBsonDocument["nameStation"].AsString
                    };
                    Stations.Add(St);
                }    
            }
            return Stations;

        }

        [HttpGet("gettrain")]
        public List<Train> GetTrains()
        {
            List<Train> Tarins = new List<Train>();          
            var filter = new BsonDocument(); // все поезда 
            var ff = db.Trains.Find(filter).ToList();         
                           
                foreach (var i in ff)
                {
                    var Tr = new Train
                    {
                        _id = i.AsBsonDocument["_id"].AsObjectId,
                        trainNumber = i.AsBsonDocument["trainNumber"].AsInt64,
                        nameRoute = i.AsBsonDocument["nameRoute"].AsString
                    };
                    Tarins.Add(Tr);
                }          
            return Tarins;
        }

        [HttpPut("updatetrain/{TrainNumber}")]
        public IActionResult UpdateTrain([FromRoute] int trainNumber, [FromBody]Train train) // обновление названия маршрута поезда
        {
            var filter = Builders<BsonDocument>.Filter.Eq("trainNumber", trainNumber);
            var update = Builders<BsonDocument>.Update.Set("nameRoute", train.nameRoute);

            db.Trains.UpdateOne(filter, update); 
            return Ok();
        }

        [HttpPost]
        public IActionResult PostTrain([FromBody]Train train)
        {
            db.Trains.InsertOne(train.ToBsonDocument());
            return Ok();
        }

        [HttpPut("poststationfortrain/{TrainNumber}")]
        public IActionResult PostStationForTrain([FromRoute] int trainNumber, [FromBody] Station[] stations)
        {
            var filter = Builders<BsonDocument>.Filter.Eq("trainNumber", trainNumber);
            var update = Builders<BsonDocument>.Update.Set("station", stations);

            db.Trains.UpdateOne(filter, update);
            return Ok();
        }


        [HttpDelete("deletetrain/{TrainNumber}")]
        public IActionResult DeleteTrain([FromRoute] int trainNumber)
        {            
            var filter = new BsonDocument("trainNumber", trainNumber);
            db.Trains.DeleteOne(filter);
            return Ok();
        }

    }
}
