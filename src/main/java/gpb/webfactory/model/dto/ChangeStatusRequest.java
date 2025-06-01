package gpb.webfactory.model.dto;

import java.util.UUID;

public record ChangeStatusRequest(
        String id,
        boolean newStatus
) {}
