package io.skysail.myetf;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String title;

    private Boolean completed = false;

}