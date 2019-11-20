using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;


namespace webTrain.Model
{
    public class Train
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId _id { get; set; } 

        [BsonRepresentation(BsonType.Int64)]
        public double trainNumber { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string nameRoute { get; set; }

        [BsonIgnore]
        public List<Station> station = new List<Station>();

        public Train()
        {

        }
        public Train(double trainNumber, string nameRoute)
        {
            this.trainNumber = trainNumber;
            this.nameRoute = nameRoute;
        }

    }
}
