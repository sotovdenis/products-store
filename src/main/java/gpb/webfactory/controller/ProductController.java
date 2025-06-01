package gpb.webfactory.controller;

import gpb.webfactory.model.entity.Product;
import gpb.webfactory.model.entity.ProductStatus;
import gpb.webfactory.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController()
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/product/all")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PutMapping("/product/all")
    public void changeStatus(
            @RequestParam("id") UUID id,
            @RequestParam("newStatus") int newStatus
    ) {
        productService.changeStatus(id, newStatus);
    }


    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable String id) {
        return productService.getProductById(UUID.fromString(id));
    }

    @PostMapping("/product/all")
    public Product updateProduct(@RequestBody Product product) {
        if (product.getStatus() == null) {
            product.setStatus(ProductStatus.CREATED);
        }
        return productService.updateProduct(product);
    }

    @DeleteMapping("/product/all")
    public void deleteProduct(@RequestBody Map<String, String> requestBody) {
        String id = requestBody.get("id");
        if (id == null || !isValidUUID(id)) {
            throw new IllegalArgumentException("Invalid UUID format");
        }
        productService.deleteProduct(UUID.fromString(id));
    }

    private boolean isValidUUID(String uuid) {
        try {
            UUID.fromString(uuid);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }
}
