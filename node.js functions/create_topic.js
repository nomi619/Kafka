const {Kafka} = require("kafkajs")

run();
async function run(){
    try
    {
         const kafka = new Kafka({
              "clientId": "myapp",
              "brokers" :["husseinmac:9092"]
         })

        const admin = kafka.admin();
        console.log("Connecting.....")
        await admin.connect()
        console.log("Connected!")
        
        await admin.createTopics({
            "topics": [{
                "topic" : "Users",   //change according to need
                "numPartitions": 2   //change according to need
            }]
        })
        console.log("Created Successfully!")
        await admin.disconnect();
    }
    catch(ex)
    {
        console.error(`Something bad happened ${ex}`)
    }
    finally{
        process.exit(0);
    }


}