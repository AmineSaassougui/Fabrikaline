package com.example.fabrikaline_backend.Repositories;


import com.example.fabrikaline_backend.Entities.City;
import com.example.fabrikaline_backend.Entities.Claim;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClaimRepository extends JpaRepository<Claim,Long> {
}
