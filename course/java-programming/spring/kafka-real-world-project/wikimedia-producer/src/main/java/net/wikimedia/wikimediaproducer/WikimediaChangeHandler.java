package net.wikimedia.wikimediaproducer;

import com.launchdarkly.eventsource.MessageEvent;
import com.launchdarkly.eventsource.background.BackgroundEventHandler;
import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;

@AllArgsConstructor
public class WikimediaChangeHandler implements BackgroundEventHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(WikimediaChangeHandler.class);
    private KafkaTemplate<String, String> kafkaTemplate;
    private String topic;

    @Override
    public void onOpen() throws Exception {

    }

    @Override
    public void onClosed() throws Exception {

    }

    @Override
    public void onMessage(String s, MessageEvent messageEvent) throws Exception {
        LOGGER.info(String.format(" [EVENT_DATA] Event Data => %s", messageEvent.getData()));
        kafkaTemplate.send(topic,messageEvent.getData());

    }

    @Override
    public void onComment(String s) throws Exception {

    }

    @Override
    public void onError(Throwable throwable) {

    }
}
