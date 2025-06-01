package gpb.webfactory;

import gpb.webfactory.model.entity.Product;
import gpb.webfactory.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    public CommandLineRunner initDatabase(ProductRepository productRepository) {
        return args -> {

            for (int i = 0; i < 20; i++) {
                productRepository.save(new Product(
                        "Product " + i,
                        "Description for Product " + i,
                        i
                         ));
            }

            Product product1 = new Product("Product A", "Description for Product A", 100);
            Product product2 = new Product("Product B", "Description for Product B", 200);

            product1.changeStatus(1);

            productRepository.save(product1);
            productRepository.save(product2);

            System.out.println("Инициализация данных завершена.");
        };
    }
}