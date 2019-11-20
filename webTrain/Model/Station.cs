using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;


namespace webTrain.Model
{
    public class Station
    {
        [BsonRepresentation(BsonType.String)]
        public string nameStation { get; set; }

        [BsonRepresentation(BsonType.DateTime)]
        public DateTime? arrivalTime { get; set; }

        [BsonRepresentation(BsonType.DateTime)]
        public DateTime? departureTime { get; set; }

        public Station()
        {
           
        }

        public Station(string nameStation, DateTime? arrivalTime, DateTime? departureTime)
        {
            this.nameStation = nameStation;
            this.arrivalTime = arrivalTime;
            this.departureTime = departureTime;
        }

    }
}
