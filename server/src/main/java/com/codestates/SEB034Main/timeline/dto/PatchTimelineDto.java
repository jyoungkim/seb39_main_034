package com.codestates.SEB034Main.timeline.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class PatchTimelineDto {

    @NotBlank(message = "타임라인 수정 내용은 공백이 아니어야 합니다.")
    private String description;
}
