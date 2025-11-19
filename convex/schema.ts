import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        userId: v.string(),
        role: v.string(),
    })
        .index("by_user_id", ["userId"])
        .index("by_email", ["email"]),

    events: defineTable({
        name: v.string(),
        description: v.string(),
        location: v.string(),
        eventDate: v.number(),
        price: v.number(),
        totalTickets: v.number(),
        userId: v.string(),
        imageStorageId: v.optional(v.id("_storage")),
        is_cancelled: v.optional(v.boolean()),
        cancelReason: v.optional(v.string()),
    }),

    tickets: defineTable({
        eventId: v.id("events"),
        userId: v.string(),
        purchasedAt: v.number(),
        status: v.union(
            v.literal("valid"),

            v.literal("cancelled")
        ),

        amount: v.optional(v.number()),
        resalePrice: v.optional(v.number()),
        buyerName: v.string(),
        buyerEmail: v.string(),
        buyerPhone: v.string(),
        buyerAddress: v.string(),
        quantity: v.number(),
    })
        .index("by_event", ["eventId"])
        .index("by_user", ["userId"])
        .index("by_user_event", ["userId", "eventId"]),
    // .index("by_payment_intent", ["paymentIntentId"]),
});
