package com.example.fabrikaline_backend.Repositories;
import com.example.fabrikaline_backend.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IUserRepository extends JpaRepository<User,Long> {
    List<User> findByDescriptionContaining(String searchCriteria);

}
