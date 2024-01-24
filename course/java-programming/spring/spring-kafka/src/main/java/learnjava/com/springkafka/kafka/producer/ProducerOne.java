package learnjava.com.springkafka.kafka.producer;

import lombok.AllArgsConstructor;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;



@Service
@AllArgsConstructor
public class ProducerOne {
    private static final Logger LOGGER = LoggerFactory.getLogger(KafkaProducer.class);
    private KafkaTemplate<String,String> kafkaTemplate;

    public  void sendMessage(String message){
        LOGGER.info(String.format("Message sent [FIRST_PRODUCER] => %s", message));
        kafkaTemplate.send("test-topic", message);
    }
}
