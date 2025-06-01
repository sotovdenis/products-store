package gpb.webfactory.service;

import gpb.webfactory.model.entity.Product;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(UUID id);
    Product createProduct(Product product);
    Product updateProduct(Product product);
    void deleteProduct(UUID id);
    void changeStatus(UUID id, int statusNum);
}
