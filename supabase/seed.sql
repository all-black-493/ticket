SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.8
-- Dumped by pg_dump version 15.8

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', 'd504480f-c2a9-4d04-8f42-26113408151d', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"123@gmail.com","user_id":"8d89fe47-063f-47c2-9423-af32bceaffea","user_phone":""}}', '2025-06-09 17:10:51.02586+00', ''),
	('00000000-0000-0000-0000-000000000000', '09aca79a-b337-4d09-9bed-f1d5002d64e7', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-09 17:11:26.131198+00', ''),
	('00000000-0000-0000-0000-000000000000', '1fb9b45b-af60-4d58-a320-4f94c6575705', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-09 17:11:52.445014+00', ''),
	('00000000-0000-0000-0000-000000000000', '3029bb30-badf-4357-9de4-f3c759bac457', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-10 13:00:08.765219+00', ''),
	('00000000-0000-0000-0000-000000000000', '641af41c-4935-47eb-83c7-3b2b66b97ced', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-10 13:01:40.129742+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e0180c32-ee2d-4ec3-a8ca-aa0faa4171bd', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 11:55:25.634285+00', ''),
	('00000000-0000-0000-0000-000000000000', '4c910c2d-c1c3-4985-a86f-922afda92e41', '{"action":"logout","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 12:01:09.101289+00', ''),
	('00000000-0000-0000-0000-000000000000', '24565f0a-2783-43d0-9d60-732f8a5df123', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 16:22:02.664285+00', ''),
	('00000000-0000-0000-0000-000000000000', '82e19a65-ffeb-4b7a-ac94-c0b1d61e51c1', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 22:34:24.287684+00', ''),
	('00000000-0000-0000-0000-000000000000', '62618b19-6220-4096-bb8f-888613aca251', '{"action":"logout","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 22:35:45.496866+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f10c7553-853a-4b0f-aa40-cdf14e11706b', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-12 22:35:51.950904+00', ''),
	('00000000-0000-0000-0000-000000000000', '04d6a3b5-684b-4ee1-9e40-7c82a4535036', '{"action":"logout","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-12 22:39:03.688277+00', ''),
	('00000000-0000-0000-0000-000000000000', '35670827-bbd6-43d0-a0a8-b612c4620e8e', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-06-13 00:04:59.743316+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b88bd453-a7ff-491b-9a4d-26dcc48de05d', '{"action":"logout","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 00:49:56.845017+00', ''),
	('00000000-0000-0000-0000-000000000000', '82d405a8-a8b3-498f-bdea-c584c4c7f592', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 00:50:19.004972+00', ''),
	('00000000-0000-0000-0000-000000000000', '116957a9-1ed7-46f1-a49d-e671e05f9126', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 09:20:40.848243+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b16fb30b-52ec-4dae-b632-0593e34f0a82', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 09:27:23.950246+00', ''),
	('00000000-0000-0000-0000-000000000000', '8f8c9643-18bf-4aee-946b-ccde654a337f', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 09:49:37.590079+00', ''),
	('00000000-0000-0000-0000-000000000000', '6782a577-197f-49bd-929b-5a72324b43c0', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 10:29:59.347236+00', ''),
	('00000000-0000-0000-0000-000000000000', '7df9d3cf-60d2-4af0-a474-7784fd36570e', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 11:55:45.241932+00', ''),
	('00000000-0000-0000-0000-000000000000', '62ef7d1f-1134-448b-b526-2682941b7419', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 11:56:04.290258+00', ''),
	('00000000-0000-0000-0000-000000000000', '1f0d02d3-f340-4275-b042-5ee54112d71e', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 11:57:48.959899+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a84ebe9f-2c78-4f54-90c6-945df9b4d7f3', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 11:58:02.208838+00', ''),
	('00000000-0000-0000-0000-000000000000', '00d77a28-6da9-43f2-9987-39e5dc947e38', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 12:15:08.778433+00', ''),
	('00000000-0000-0000-0000-000000000000', '9303c409-25bc-4cea-809d-afed0ea9392b', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 12:15:20.030976+00', ''),
	('00000000-0000-0000-0000-000000000000', '1ce979db-30d4-4ffd-9388-f1cab4830f7d', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-06-13 12:15:23.460291+00', ''),
	('00000000-0000-0000-0000-000000000000', '2550d74c-c5a2-4f05-808f-ab161ea9ddb5', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 12:50:37.140585+00', ''),
	('00000000-0000-0000-0000-000000000000', '03a73b38-af90-4b6c-a7f8-14d0f446d55e', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 12:50:51.996322+00', ''),
	('00000000-0000-0000-0000-000000000000', '28c687ff-89c8-4c17-9520-2add7f7d179b', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-06-13 12:50:55.579812+00', ''),
	('00000000-0000-0000-0000-000000000000', 'beeb6e09-cb8f-42c3-9cc9-705803aacdef', '{"action":"logout","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 12:54:11.54239+00', ''),
	('00000000-0000-0000-0000-000000000000', '81ac5cc0-13b9-413f-bbe7-e2f8b485ce8f', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 12:54:27.10962+00', ''),
	('00000000-0000-0000-0000-000000000000', '2f4f015b-fd20-4a55-8412-48be705b4b5e', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 12:54:36.538886+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fb7abb20-1a25-4783-b23e-7c5e5290cc1a', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-06-13 12:54:39.706638+00', ''),
	('00000000-0000-0000-0000-000000000000', '2f38d95f-af7c-4798-9cc5-ae313f41ac34', '{"action":"logout","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 13:37:38.309754+00', ''),
	('00000000-0000-0000-0000-000000000000', '3da6b194-47ae-43d7-8e63-cb1338073565', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-13 13:37:53.622647+00', ''),
	('00000000-0000-0000-0000-000000000000', '45eb27e8-691a-4cf0-b0c2-8dfc34e98b27', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-13 13:38:00.797134+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd7e46f1f-fd71-473e-8ac6-732e922bcab3', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider_type":"magiclink"}}', '2025-06-13 13:38:04.846736+00', ''),
	('00000000-0000-0000-0000-000000000000', '21ba751b-ae77-47fb-b335-cb36734e8d8b', '{"action":"user_recovery_requested","actor_id":"f42c9d53-399b-4c8c-88f2-d4acccb58468","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 17:14:10.74392+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b3d52451-d011-4ac4-b46e-1e591c0f7ddb', '{"action":"user_recovery_requested","actor_id":"f42c9d53-399b-4c8c-88f2-d4acccb58468","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 17:14:20.246799+00', ''),
	('00000000-0000-0000-0000-000000000000', '37a55a6e-c529-4e19-80d9-94abc601c849', '{"action":"user_recovery_requested","actor_id":"f42c9d53-399b-4c8c-88f2-d4acccb58468","actor_username":"justinjerome401@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 17:18:13.93092+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c92a72cb-ff88-4ea7-9b8e-4b102cb74855', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 23:35:41.829398+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e0e8bf7-d734-4769-9d05-2e706b54aec6', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 23:41:50.69421+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bba18e71-d098-4dc4-be53-556cc438ed14', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 23:46:48.458233+00', ''),
	('00000000-0000-0000-0000-000000000000', '9fc006f8-b423-4804-91d5-9abbdf87ba5b', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-15 23:54:28.343499+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b4ea3edc-94db-411f-bc15-98522a71d6d4', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 12:57:42.574483+00', ''),
	('00000000-0000-0000-0000-000000000000', '850dafac-7648-4b3e-8d06-5971639feef0', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 13:11:40.277062+00', ''),
	('00000000-0000-0000-0000-000000000000', '17e90598-529a-4c45-bfba-64a482621460', '{"action":"user_recovery_requested","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"user"}', '2025-06-16 13:27:11.863927+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aeb8a98e-924f-4af9-91ac-ae441f0132f7', '{"action":"login","actor_id":"8d89fe47-063f-47c2-9423-af32bceaffea","actor_username":"123@gmail.com","actor_via_sso":false,"log_type":"account"}', '2025-06-16 13:27:37.624091+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('aa85b2fd-0c7e-46ff-a760-710eb47776b6', '8d89fe47-063f-47c2-9423-af32bceaffea', 'fd37ded4-fb46-4f03-bfee-cba9583888e2', 's256', 'S26_UOum7aB-4xlW7BYZR4Jybnl8TK_h63McPip9kqI', 'magiclink', '', '', '2025-06-13 00:50:18.994319+00', '2025-06-13 00:50:18.994319+00', 'magiclink', NULL),
	('43e216a8-d09a-40bb-bf86-3f18bb166ccb', '8d89fe47-063f-47c2-9423-af32bceaffea', '86a7bb09-2812-43b7-86e1-d9a0bcc27c31', 's256', 'Y9hm_JGD9Y7mqc1BQC8GmsOj4nqtBH8CFsIev9OeO_k', 'magiclink', '', '', '2025-06-13 09:20:40.843245+00', '2025-06-13 09:20:40.843245+00', 'magiclink', NULL),
	('eb173757-3332-4f20-b395-25547a7a3aae', '8d89fe47-063f-47c2-9423-af32bceaffea', 'c4dfe03a-8d2e-4240-8b4a-38344b2c680a', 's256', '_0pKUVGGqph1lpGx9pd-Q6N6pvWWyfW40G0wKBZZhR4', 'magiclink', '', '', '2025-06-13 09:27:23.945301+00', '2025-06-13 09:27:23.945301+00', 'magiclink', NULL),
	('d18de075-f484-4d96-9170-5d41223d060b', '8d89fe47-063f-47c2-9423-af32bceaffea', '31b63a51-a455-4198-b613-c8571a5e9edc', 's256', 'KPa69bWaZHNeSMyQQbIOAeT76Xb7TsCRBJ2dvNWY1lU', 'magiclink', '', '', '2025-06-13 09:49:37.586475+00', '2025-06-13 10:29:59.376772+00', 'magiclink', '2025-06-13 10:29:59.376437+00'),
	('23909a14-2a25-4047-bb43-62fb25d28b3c', '8d89fe47-063f-47c2-9423-af32bceaffea', 'ca5cf27d-c30f-479f-845b-d42f618358e8', 's256', 'VQd3gAsglpLUCPclbNXtaZWTSx3LT-NBh-OB2ZbhJaY', 'magiclink', '', '', '2025-06-13 11:55:45.234536+00', '2025-06-13 11:56:04.302424+00', 'magiclink', '2025-06-13 11:56:04.302214+00'),
	('8bd49657-647e-4e06-9f6f-c6da79a1cc22', '8d89fe47-063f-47c2-9423-af32bceaffea', '1f800af7-8e71-46c3-be3c-5e1575357674', 's256', 'C2v2rDHBZNOb2SLctha3ARe_-7r9-aSYX_AwOAhVz7E', 'magiclink', '', '', '2025-06-13 11:57:48.954801+00', '2025-06-13 11:58:02.214988+00', 'magiclink', '2025-06-13 11:58:02.214831+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', 'f42c9d53-399b-4c8c-88f2-d4acccb58468', 'authenticated', 'authenticated', 'justinjerome401@gmail.com', '$2a$10$vP2K28y60Lge8pKqbZbHc.vMYmmWP4m5BsEuNjPfe4NDKn78BKFjW', NULL, NULL, 'f89f92a2ab9e344ff29a2c6c4d19dc9eb83257d3b6886a0dc9df615f', '2025-06-15 17:11:52.187628+00', 'c7521a3c7a8f47494304f6043e7ebddbdb57c3f5d7fd9345e9d567c6', '2025-06-15 17:18:13.930383+00', '', '', NULL, NULL, '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2025-06-15 17:11:52.444375+00', '2025-06-15 17:18:13.933216+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '8d89fe47-063f-47c2-9423-af32bceaffea', 'authenticated', 'authenticated', '123@gmail.com', '$2a$10$1CGVuz1R9yA4J4nGbTGZY.Mj7UGglAPtMC2RjZcijAmnoFUXoxEBW', '2025-06-09 17:10:51.034618+00', NULL, '', NULL, '', '2025-06-16 13:27:11.863386+00', '', '', NULL, '2025-06-16 13:27:37.632297+00', '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-06-09 17:10:51.004555+00', '2025-06-16 13:27:37.645441+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('8d89fe47-063f-47c2-9423-af32bceaffea', '8d89fe47-063f-47c2-9423-af32bceaffea', '{"sub": "8d89fe47-063f-47c2-9423-af32bceaffea", "email": "123@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-06-09 17:10:51.021764+00', '2025-06-09 17:10:51.021928+00', '2025-06-09 17:10:51.021928+00', '0d8601ab-5995-4628-adaf-e46a7fe694ff'),
	('f42c9d53-399b-4c8c-88f2-d4acccb58468', 'f42c9d53-399b-4c8c-88f2-d4acccb58468', '{"sub": "f42c9d53-399b-4c8c-88f2-d4acccb58468", "email": "justinjerome401@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-06-15 17:11:52.460878+00', '2025-06-15 17:11:52.461007+00', '2025-06-15 17:11:52.461007+00', '146aaff3-22e1-45e3-bbeb-c921efe2645c');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('9a50fac6-211c-4e09-8c3b-83b54a87cd28', '8d89fe47-063f-47c2-9423-af32bceaffea', '2025-06-13 13:38:04.848777+00', '2025-06-13 13:38:04.848777+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36', '172.20.0.1', NULL),
	('a948dd4f-f644-46d4-99f0-ff8b09095916', '8d89fe47-063f-47c2-9423-af32bceaffea', '2025-06-16 13:27:37.632546+00', '2025-06-16 13:27:37.632546+00', NULL, 'aal1', NULL, NULL, 'node', '172.19.0.1', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('9a50fac6-211c-4e09-8c3b-83b54a87cd28', '2025-06-13 13:38:04.856944+00', '2025-06-13 13:38:04.856944+00', 'magiclink', 'd378ebe1-9d0f-422b-ac28-9f4cbf87e1fb'),
	('a948dd4f-f644-46d4-99f0-ff8b09095916', '2025-06-16 13:27:37.646788+00', '2025-06-16 13:27:37.646788+00', 'otp', '8c0377f8-5114-4a1f-8e22-719ca3173452');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."one_time_tokens" ("id", "user_id", "token_type", "token_hash", "relates_to", "created_at", "updated_at") VALUES
	('a8b9b507-323f-40de-ac09-82fd12140eda', 'f42c9d53-399b-4c8c-88f2-d4acccb58468', 'confirmation_token', 'f89f92a2ab9e344ff29a2c6c4d19dc9eb83257d3b6886a0dc9df615f', 'justinjerome401@gmail.com', '2025-06-15 17:11:52.474282', '2025-06-15 17:11:52.474282'),
	('e0478b5f-2811-44ac-ba0d-f35c9de61155', 'f42c9d53-399b-4c8c-88f2-d4acccb58468', 'recovery_token', 'c7521a3c7a8f47494304f6043e7ebddbdb57c3f5d7fd9345e9d567c6', 'justinjerome401@gmail.com', '2025-06-15 17:18:13.935617', '2025-06-15 17:18:13.935617');


--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 13, 'gfjc74j2mzt3', '8d89fe47-063f-47c2-9423-af32bceaffea', false, '2025-06-13 13:38:04.852301+00', '2025-06-13 13:38:04.852301+00', NULL, '9a50fac6-211c-4e09-8c3b-83b54a87cd28'),
	('00000000-0000-0000-0000-000000000000', 14, 'r4rcskbtrpz4', '8d89fe47-063f-47c2-9423-af32bceaffea', false, '2025-06-16 13:27:37.638228+00', '2025-06-16 13:27:37.638228+00', NULL, 'a948dd4f-f644-46d4-99f0-ff8b09095916');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "created_at", "full_name", "user_id") VALUES
	(1, '2025-06-17 15:39:05+00', 'Jeremy 123N', '8d89fe47-063f-47c2-9423-af32bceaffea');


--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenants" ("id", "created_at", "name", "domain") VALUES
	('packt', '2025-06-17 08:36:59.935276+00', 'Packt Publishing', 'packt.local'),
	('activenode', '2025-06-17 08:37:55.298924+00', 'activenode Education', 'activenode.learn'),
	('oddmonkey', '2025-06-17 08:38:57.117378+00', 'Odd Monkey Inc', 'oddmonkey.inc');


--
-- Data for Name: tenant_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."tenant_permissions" ("id", "created_at", "profile", "tenant") VALUES
	(1, '2025-06-20 11:34:05.560825+00', 1, 'packt'),
	(2, '2025-06-20 11:34:27.046685+00', 1, 'activenode');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: prefixes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 14, true);


--
-- Name: profiles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."profiles_id_seq"', 1, false);


--
-- Name: profiles_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."profiles_id_seq1"', 1, true);


--
-- Name: tenant_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tenant_permissions_id_seq"', 2, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
