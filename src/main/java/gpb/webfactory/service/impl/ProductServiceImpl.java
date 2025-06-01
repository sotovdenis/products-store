package gpb.webfactory.service.impl;

import gpb.webfactory.model.entity.Product;
import gpb.webfactory.model.entity.ProductStatus;
import gpb.webfactory.repository.ProductRepository;
import gpb.webfactory.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(UUID id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(UUID id) {
        productRepository.deleteById(id);
    }

    @Override
    public void changeStatus(UUID id, int statusNum) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Продукт не найден"));

        product.changeStatus(statusNum);
        productRepository.save(product);
    }
}
