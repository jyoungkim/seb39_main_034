insert into Member (member_id, username, email, password, role, created_at, modified_at) values (default, 'togethertodo1', 'togethertodo1@test.com', '$2y$10$2.oUf4wzHidMU1h2P9zMFuVBpmfyzDlyjxFcGoyQmQC0qECBBZuhO', 'ROLE_USER', now(), now()), (default, 'togethertodo2', 'togethertodo2@test.com', '$2y$10$2.oUf4wzHidMU1h2P9zMFuVBpmfyzDlyjxFcGoyQmQC0qECBBZuhO', 'ROLE_USER', now(), now()), (default, 'togethertodo3', 'togethertodo3@test.com', '$2y$10$2.oUf4wzHidMU1h2P9zMFuVBpmfyzDlyjxFcGoyQmQC0qECBBZuhO', 'ROLE_USER', now(), now()), (default, 'test3', 'test3@test.com', '$2y$10$2.oUf4wzHidMU1h2P9zMFuVBpmfyzDlyjxFcGoyQmQC0qECBBZuhO', 'ROLE_USER', now(), now()), (default, 'test4', 'test4@test.com', '$2y$10$2.oUf4wzHidMU1h2P9zMFuVBpmfyzDlyjxFcGoyQmQC0qECBBZuhO', 'ROLE_USER', now(), now());
insert into Category (category_id, category_name, created_at, modified_at) values (default, '운동', now(), now()), (default, '생활습관', now(), now()), (default, '독서', now(), now()), (default, '공부', now(), now());
insert into Image (image_id, created_at, modified_at, filename, url) values (default, now(), now(), 'category__life.jpeg', 'https://goalimage.s3.ap-northeast-2.amazonaws.com/images/category__life.jpeg'), (default, now(), now(), 'category_early-bird-wakeup.jpg', 'https://goalimage.s3.ap-northeast-2.amazonaws.com/images/category_early-bird-wakeup.jpg'), (default, now(), now(), 'category_life.png', 'https://goalimage.s3.ap-northeast-2.amazonaws.com/images/category_life.png'), (default, now(), now(), 'category_study.jpeg', 'https://goalimage.s3.ap-northeast-2.amazonaws.com/images/category_study.jpeg'), (default, now(), now(), 'category_study2.jpg', 'https://goalimage.s3.ap-northeast-2.amazonaws.com/images/category_study2.jpg');
insert into Goal ( GOAL_ID, CREATED_AT, MODIFIED_AT, DESCRIPTION, END_DATE, FAILURE_PENALTY, LIST_UP, RESULT, STATUS, SUCCESS_AWARD, TITLE, views, CATEGORY_ID, MEMBER_ID, IMAGE_ID ) values ( default, now() -7, now() -7, '목표를 설명하는 텍스트', now() -7 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(1) 목표에 대한 타이틀이 들어갑니다.1', 0, 1, 1, 5 ), ( default, now() -7, now() -7, '목표를 설명하는 텍스트', now() -7 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(2) 목표에 대한 타이틀이 들어갑니다.2', 0, 1, 1, 5 ), ( default, now() -7, now() -7, '목표를 설명하는 텍스트', now() -7 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(3) 목표에 대한 타이틀이 들어갑니다.3', 0, 1, 1, 5 ), ( default, now() -7, now() -7, '목표를 설명하는 텍스트', now() -7 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(4) 목표에 대한 타이틀이 들어갑니다.4', 0, 1, 1, 5 ), ( default, now() -7, now() -7, '목표를 설명하는 텍스트', now() -7 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(5) 목표에 대한 타이틀이 들어갑니다.5', 0, 1, 1, 5 ), ( default, now() -7, now() -7, '목표를 설명하는 텍스트', now() -7 + 3, '3일동안 출퇴근시 계단만 이용', 0, 'SUCCESS', 1, '치킨 시켜 먹기', '(6) 목표에 대한 타이틀이 들어갑니다.6', 0, 1, 1, 5 ), ( default, now() -7, now() -7, '목표를 설명하는 텍스트', now() -7 + 3, '3일동안 출퇴근시 계단만 이용', 0, 'FAILURE', 1, '치킨 시켜 먹기', '(7) 목표에 대한 타이틀이 들어갑니다.7', 0, 1, 1, 5 ), ( default, now() -4, now() -4, '목표를 설명하는 텍스트', now() -4 + 2, '3일동안 출퇴근시 계단만 이용', 0, 'SUCCESS', 1, '치킨 시켜 먹기', '(8) 목표에 대한 타이틀이 들어갑니다.8', 0, 1, 1, 5 ), ( default, now() -4, now() -4, '목표를 설명하는 텍스트', now() -4 + 2, '3일동안 출퇴근시 계단만 이용', 0, 'FAILURE', 1, '치킨 시켜 먹기', '(9) 목표에 대한 타이틀이 들어갑니다.9', 0, 2, 1, 5 ), ( default, now() -4, now() -4, '목표를 설명하는 텍스트', now() -4 + 2, '3일동안 출퇴근시 계단만 이용', 0, 'SUCCESS', 1, '치킨 시켜 먹기', '(10) 목표에 대한 타이틀이 들어갑니다.10', 0, 2, 1, 5 ), ( default, now() -4, now() -4, '목표를 설명하는 텍스트', now() -4 + 2, '3일동안 출퇴근시 계단만 이용', 0, 'FAILURE', 1, '치킨 시켜 먹기', '(11) 목표에 대한 타이틀이 들어갑니다.11', 0, 3, 1, 5 ), ( default, now() -4, now() -4, '목표를 설명하는 텍스트', now() -4 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(12) 목표에 대한 타이틀이 들어갑니다.12', 0, 1, 1, 5 ), ( default, now() -2, now() -2, '목표를 설명하는 텍스트', now() -2 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(13) 목표에 대한 타이틀이 들어갑니다.13', 0, 1, 1, 5 ), ( default, now() -2, now() -2, '목표를 설명하는 텍스트', now() -2 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(14) 목표에 대한 타이틀이 들어갑니다.14', 0, 1, 1, 5 ), ( default, now() -2, now() -2, '목표를 설명하는 텍스트', now() -2 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(15) 목표에 대한 타이틀이 들어갑니다.15', 0, 1, 1, 5 ), ( default, now() -2, now() -2, '목표를 설명하는 텍스트', now() -2 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(16) 목표에 대한 타이틀이 들어갑니다.16', 0, 1, 1, 5 ), ( default, now() -2, now() -2, '목표를 설명하는 텍스트', now() -2 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(17) 목표에 대한 타이틀이 들어갑니다.17', 0, 1, 1, 5 ), ( default, now() -1, now() -1, '목표를 설명하는 텍스트', now() -1 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(18) 목표에 대한 타이틀이 들어갑니다.18', 0, 4, 1, 5 ), ( default, now() -1, now() -1, '목표를 설명하는 텍스트', now() -1 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(19) 목표에 대한 타이틀이 들어갑니다.19', 0, 1, 1, 5 ), ( default, now() -1, now() -1, '목표를 설명하는 텍스트', now() -1 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(20) 목표에 대한 타이틀이 들어갑니다.20', 0, 4, 1, 5 ), ( default, now() -1, now() -1, '목표를 설명하는 텍스트', now() -1 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(21) 목표에 대한 타이틀이 들어갑니다.21', 0, 1, 1, 5 ), ( default, now() -1, now() -1, '목표를 설명하는 텍스트', now() -1 + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(22) 목표에 대한 타이틀이 들어갑니다.22', 0, 3, 1, 5 ), ( default, now(), now(), '목표를 설명하는 텍스트', now() + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(23) 목표에 대한 타이틀이 들어갑니다.23', 0, 1, 1, 5 ), ( default, now(), now(), '목표를 설명하는 텍스트', now() + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(24) 목표에 대한 타이틀이 들어갑니다.24', 0, 2, 1, 5 ), ( default, now(), now(), '목표를 설명하는 텍스트', now() + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(25) 목표에 대한 타이틀이 들어갑니다.25', 0, 2, 1, 5 ), ( default, now(), now(), '목표를 설명하는 텍스트', now() + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(26) 목표에 대한 타이틀이 들어갑니다.26', 0, 1, 1, 5 ), ( default, now(), now(), '목표를 설명하는 텍스트', now() + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(27) 목표에 대한 타이틀이 들어갑니다.27', 0, 1, 1, 5 ), ( default, now(), now(), '목표를 설명하는 텍스트', now() + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(28) 목표에 대한 타이틀이 들어갑니다.28', 0, 1, 1, 5 ), ( default, now(), now(), '목표를 설명하는 텍스트', now() + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(29) 목표에 대한 타이틀이 들어갑니다.29', 0, 1, 2, 5 ), ( default, now(), now(), '목표를 설명하는 텍스트', now() + 20, '3일동안 출퇴근시 계단만 이용', 0, 'NONE', 0, '치킨 시켜 먹기', '(30) 목표에 대한 타이틀이 들어갑니다.30', 0, 1, 1, 5 );
insert into Todo (TODO_ID, CREATED_AT, MODIFIED_AT, TITLE, COMPLETED, GOAL_ID, MEMBER_ID) values (default, now(), now(), ' 추가1 여기에 목표를 달성하기 위해 필요한 할일들 목록을 만들 수 있어요', 0, 30, 1), (default, now(), now(), '추가2 여기에 목표를 달성하기 위해 필요한 할일들 목록을 만들 수 있어요', 0, 30, 1), (default, now(), now(), '추가3 여기에 목표를 달성하기 위해 필요한 할일들 목록을 만들 수 있어요', 0, 30, 1), (default, now(), now(), ' 추가1 여기에 목표를 달성하기 위해 필요한 할일들 목록을 만들 수 있어요', 0, 29, 2), (default, now(), now(), '추가2 여기에 목표를 달성하기 위해 필요한 할일들 목록을 만들 수 있어요', 0, 29, 2);
insert into Todo (TODO_ID, CREATED_AT, MODIFIED_AT, TITLE, COMPLETED, COMPLETED_AT, GOAL_ID, MEMBER_ID) values (default, now(), now(), ' 추가1 완료된 할일', 1, now(), 30, 1), (default, now(), now(), ' 추가2 완료된 할일', 1, now(), 30, 1), (default, now(), now(), ' 추가1 완료된 할일', 1, now(), 29, 2);
insert into Timeline (TIMELINE_ID, CREATED_AT, MODIFIED_AT, DESCRIPTION, FINAL_TIMELINE, GOAL_ID, IMAGE_ID, MEMBER_ID) values (default, now(), now(), '타임라인용 콘텐츠 1', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 2', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 3', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 4', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 5', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 6', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 7', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 8', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 9', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 10', 0, 30, null, 1), (default, now(), now(), '타임라인용 콘텐츠 10', 0, 29, null, 2), (default, now(), now(), '타임라인용 콘텐츠 10', 0, 29, null, 2), (default, now(), now(), '타임라인용 콘텐츠 10', 0, 29, null, 2), (default, now() -4 + 2, now() -4 + 2, '후기가 아닌 일반 타임라인용 콘텐츠 10', 0, 10, null, 1), (default, now() -4 + 2, now() -4 + 2, '후기가 아닌 일반 타임라인용 콘텐츠 10', 0, 11, null, 1), (default, now() -4 + 3, now() -4 + 3, '후기 타임라인용 콘텐츠 10', 1, 10, null, 1), (default, now() -4 + 3, now() -4 + 3, '후기 타임라인용 콘텐츠 10', 1, 11, null, 1);