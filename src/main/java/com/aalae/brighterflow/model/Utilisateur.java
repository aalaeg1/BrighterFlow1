package com.aalae.brighterflow.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "utilisateurs")
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Integer id;

    private String email;

    @Column(name = "mot_de_passe")
    @JsonProperty("motDePasse") // important pour REST
    private String motDePasse;

    private String role;
    private String nom;

    // === Constructors ===

    public Utilisateur() {}

    public Utilisateur(String email, String motDePasse, String role, String nom) {
        this.email = email;
        this.motDePasse = motDePasse;
        this.role = role;
        this.nom = nom;
    }

    // === Getters ===

    public Integer getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public String getRole() {
        return role;
    }

    public String getNom() {
        return nom;
    }

    // === Setters ===

    public void setId(Integer id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    @Override
    public String toString() {
        return "Utilisateur{email='" + email + "', nom='" + nom + "', role='" + role + "'}";
    }
}
