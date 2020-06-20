export const schema = {
  models: {
    Item: {
      name: "Item",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        text: {
          name: "text",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        completed: {
          name: "completed",
          isArray: false,
          type: "Boolean",
          isRequired: true,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "Items",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                provider: "userPools",
                ownerField: "owner",
                allow: "owner",
                identityClaim: "cognito:username",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  version: "85df40748d75db5ac302cd63dd0f9feb",
};
