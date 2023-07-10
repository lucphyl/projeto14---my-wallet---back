import joi from "joi";

export const schemaTransactions = joi.object({
    value:joi.number().positive().required(),
    description: joi.string().required(),
    type: joi.string().required().valid("income", "expense")
});
