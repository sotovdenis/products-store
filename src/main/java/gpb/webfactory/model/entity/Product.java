package gpb.webfactory.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "product")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Product {

    private UUID id;
    private String name;
    private String description;
    private double price;
    private String brand;
    private ProductStatus status;

    protected Product() {
    }

    public Product(String name, String description, double price, String brand) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.brand = brand;
        this.status = ProductStatus.CREATED;
    }

    @Id
    @GeneratedValue(generator = "UUID")
    @Column(name = "id", nullable = false)
    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    @Column(nullable = false, name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(nullable = false, name = "description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(nullable = false, name = "brand")
    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    @Column(nullable = false, name = "price")
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Column(nullable = false, name = "status")
    public ProductStatus getStatus() {
        return this.status;
    }

    public void setStatus(ProductStatus status) {
        this.status = status;
    }

    public void changeStatus(int statusNum) {
        this.status = ProductStatus.values()[statusNum];
    }

}