package net.wikimedia.wikimediaproducer;

import com.launchdarkly.eventsource.background.BackgroundEventSource;
import com.launchdarkly.eventsource.background.BackgroundEventHandler;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.concurrent.TimeUnit;


@Service
@AllArgsConstructor
@NoArgsConstructor
public class WikimediaProducer {
    private static final Logger LOGGER = LoggerFactory.getLogger(WikimediaProducer.class);

    private KafkaTemplate<String, String> kafkaTemplate;

    public void sendMessage() throws Exception{
        String topic ="wikimedia_recent_change";

//        to read real stream
        BackgroundEventHandler eventHandler = new WikimediaChangeHandler(kafkaTemplate,topic);
        String url = "https://stream.wikimedia.org/v2/stream/recentchange";




            BackgroundEventSource.Builder builder = new BackgroundEventSource.Builder(eventHandler, URI.create(url));
            BackgroundEventSource eventSource = builder.build();
            eventSource.start();

        TimeUnit.MINUTES.sleep(10);


    }
}
