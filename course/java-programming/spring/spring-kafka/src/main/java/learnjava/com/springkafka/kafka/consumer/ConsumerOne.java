package learnjava.com.springkafka.kafka.consumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class ConsumerOne {

    private static final Logger LOGGER = LoggerFactory.getLogger(ConsumerOne.class);

    @KafkaListener(topics = "test-topic" ,groupId = "group-one")
    public  void consumeMessage(String message){
       LOGGER.info(String.format("Received Message [FIRST_CONSUMER] => : %s" ,message));
    }

}
