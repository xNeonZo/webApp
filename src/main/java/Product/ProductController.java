package Product;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping
    public List<Product> getAllProducts() {
        return List.of(
            new Product()
                .setId(1)
                .setName("Produkt A"), 
            new Product()
                .setId(2)
                .setName("Produkt B")
        );
    }
}

