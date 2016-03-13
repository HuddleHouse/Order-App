Uster Order Application
=======================

A Symfony project created on February 20, 2016, 11:27 pm.

# Order Application with FOSUserBundle

 This app has multiple groups (offices) of Users that can order replacement parts. A user can only join after being invited. As of right now only ROLE_ADMINS can invite people.

## Reference

#### Routes

Default Controller:

- "admin_home" /admin

AdminController:

- "send_invitation" /admin/add-user
- "all_invitations" /admin/add-user/sent-invitations
- "admin_edit_user" /admin/view-users/edit/{user_id}
- "admin_order_edit" /admin/order/{cart_id}/review
- "admin_order_approve" /admin/order/{cart_id}
