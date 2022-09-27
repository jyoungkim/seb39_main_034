package com.codestates.SEB034Main.image.entity;

import com.codestates.SEB034Main.goal.entity.Goal;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;

    @Column(nullable = false)
    private String url;

    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    @Builder.Default
    private LocalDateTime modifiedAt = LocalDateTime.now();

//    @JsonManagedReference
//    @OneToOne
//    @JoinColumn(name = "goalId")
//    private Goal goal;
}
