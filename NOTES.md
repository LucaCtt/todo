## Amplify

### Auth

AWS Amplify auth uses Amazon Cognito, which is a complete authentication and authorization service based on
two main components: the **Users Pool** and the **Identity Pool**.

The **Users Pool** is basically a database of the users registered to the service.
It can be configured to require certain fields (email, phone number, ...) during registration and login.
These fields can also be custom.
It also supports Lambda functions run as "hooks" during a certain phase of registration, login, ecc. .
Unlike normal (SQL) databases however, you cannot freely add "columns" to the users table: this can be
worked around by using the "storage" associated with each entry. This storage is basically a name-value list,
that saves the changes offline, and updates the remote entry by calling the synchronize() procedure.
Users can be grouped, for example to specify certain permission only for certain users.
The groups are organized by precedence: this way, if a user is in multiple groups with different permissions,
the "top" group's permissions will prevail.

The **Identity Pool** allows temporary access to registered (and optionally unregistered) users to AWS resources
tied to the developer account (in this app's case it gives users access to AWS AppSync for the GraphQL API).
I'll call the token returned by this operation the _permission token_.

The way it works (roughly) is by generating a unique token for the user, which is identified through the Users
Pool, or by using third party auth (called _Federation_), like Google or Twitter.
The latter auth option in particular must be explicitly enabled, and Cognito will NOT store the response
of such auth services, but will only "extract" and id from them, which is what is stored.

#### TO VERIFY:

- The third party auth response is stored on the client, and periodically sent to the Cognito service
  to renew the permission token.
- The auth based on the Users Pool is completely separated from the Identity Pool: the user authenticates
  to the Users Pool, receives some kind of auth token, and just like in the former situation,
  it resends it periodically to the Identity Pool to renew the permission token.
- Protocols used by Cognito (prolly OpenID Connect).
