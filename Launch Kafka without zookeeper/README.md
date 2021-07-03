# Launch Kafka without zookeeper


![Alt text](<Capture.PNG>)  

Requirements: Kafka version 2.8 or above  

1- First we need to create kafka cluster id before starting the servers.  
2- Next we need to format all the storage directories. This is basically the directory that we put in log.dirs property.  
3- We are giving a very small max heap of 300M since we are running all the servers in a single local machine.  
4- Lauch the server
