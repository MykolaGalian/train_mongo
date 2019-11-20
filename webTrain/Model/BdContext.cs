using MongoDB.Bson;
using MongoDB.Driver;


namespace webTrain.Model
{
    public class BdContext
    {
        IMongoDatabase database;
        public BdContext()
        {
            string connectionString = "mongodb://localhost";
            var client = new MongoClient(connectionString);
            database = client.GetDatabase("TrainDB");
        }


        public IMongoDatabase Database
        {
            get { return database; }
        }

        public IMongoCollection<BsonDocument> Trains
        {
            get
            {
                return Database.GetCollection<BsonDocument>("TrainDB.StationSchedule");              
              
            }
        }
    }
}
