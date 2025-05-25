package com.aalae.brighterflow.service;

import com.aalae.brighterflow.model.Utilisateur;
import com.aalae.brighterflow.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurService2 {

    @Autowired
    private UtilisateurRepository repo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public void save(Utilisateur utilisateur) {
        utilisateur.setMotDePasse(passwordEncoder.encode(utilisateur.getMotDePasse()));
        repo.save(utilisateur);
    }

    public Utilisateur login(String email, String motDePasse) {
        return repo.findByEmail(email)
            .filter(u -> passwordEncoder.matches(motDePasse, u.getMotDePasse()))
            .orElse(null);
    }
}