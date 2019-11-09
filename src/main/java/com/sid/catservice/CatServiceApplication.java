package com.sid.catservice;

import com.sid.catservice.dao.ProduitRepository;
import com.sid.catservice.entities.Produit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CatServiceApplication implements CommandLineRunner {

    @Autowired
    private ProduitRepository produitRepository;

    public static void main(String[] args) {
        SpringApplication.run(CatServiceApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        produitRepository.save(new Produit(null, "Dell", 7500, 3));
        produitRepository.save(new Produit(null, "Toshiba", 6000, 5));
        produitRepository.save(new Produit(null, "Asus", 5500, 8));
        produitRepository.save(new Produit(null, "Lenovo", 8000, 2));

        produitRepository.findAll().forEach(produit -> {
            System.out.println(produit.toString());
        });
    }
}
