package Microservicio.project;

public class Product {
    private Long id;
    private String name;
    private int price;
    private String category;
    private String detail;

    
    public Product() {

    }

    public Product(String name, int price, String category, String detail, Long id) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.detail = detail;
    }
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

     public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }
}
