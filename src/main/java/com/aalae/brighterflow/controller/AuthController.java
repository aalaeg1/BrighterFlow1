package com.aalae.brighterflow.controller;

import com.aalae.brighterflow.model.Utilisateur;
import com.aalae.brighterflow.service.UtilisateurService2;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
public class AuthController {

    @Autowired
    private UtilisateurService2 service;

    @PostMapping("/signup")
    @ResponseBody
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> signup(@RequestBody Utilisateur utilisateur) {
        System.out.println(">> INSCRIPTION REÇUE : " + utilisateur.getEmail());
        try {
            service.save(utilisateur);
            return ResponseEntity.ok("Utilisateur enregistré");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Erreur: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    @ResponseBody
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> login(@RequestBody Utilisateur utilisateur, HttpSession session) {
        Utilisateur user = service.login(utilisateur.getEmail(), utilisateur.getMotDePasse());
        if (user != null) {
            session.setAttribute("user", user);

            // ✅ Renvoie un JSON avec nom + rôle
            Map<String, String> data = new HashMap<>();
            data.put("role", user.getRole());
            data.put("nom", user.getNom());
            return ResponseEntity.ok(data);
        } else {
            return ResponseEntity.status(401).body("Email ou mot de passe incorrect");
        }
    }

    @GetMapping("/home")
    public String home(HttpSession session, Model model) {
        Utilisateur user = (Utilisateur) session.getAttribute("user");
        if (user == null) {
            return "redirect:/login";
        }
        model.addAttribute("username", user.getNom());
        return "home";
    }



}
