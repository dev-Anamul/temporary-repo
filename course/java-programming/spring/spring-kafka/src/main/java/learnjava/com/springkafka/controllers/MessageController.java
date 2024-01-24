package learnjava.com.springkafka.controllers;

import learnjava.com.springkafka.kafka.producer.ProducerOne;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/message")
@AllArgsConstructor
public class MessageController {

    private ProducerOne producerOne;

    @GetMapping("/publish")
    public ResponseEntity<String> publish(@RequestParam("message") String message){
        producerOne.sendMessage(message);
        return ResponseEntity.ok("Message sent to the topic");
    }

}
