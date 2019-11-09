package com.sid.catservice.dao;

import com.sid.catservice.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {



}
