import{_ as t,o as d,c as r,e}from"./app.d00733fa.js";const a={},i=e('<h1 id="_3-\u6570\u636E\u5E93\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_3-\u6570\u636E\u5E93\u8BBE\u8BA1" aria-hidden="true">#</a> 3. \u6570\u636E\u5E93\u8BBE\u8BA1</h1><h3 id="_3-1-\u8BD5\u5377\u8868" tabindex="-1"><a class="header-anchor" href="#_3-1-\u8BD5\u5377\u8868" aria-hidden="true">#</a> 3.1 \u8BD5\u5377\u8868</h3><ul><li>\u8868\u540D\uFF1At_exam_paper</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>name</td><td>varchar</td><td>\u8BD5\u5377\u540D\u79F0</td></tr><tr><td>subject_id</td><td>int</td><td>\u5B66\u79D1</td></tr><tr><td>paper_type</td><td>int</td><td>\u8BD5\u5377\u7C7B\u578B( 1.\u56FA\u5B9A\u8BD5\u5377 4.\u65F6\u6BB5\u8BD5\u5377 6.\u4EFB\u52A1\u8BD5\u5377 )</td></tr><tr><td>grade_level</td><td>int</td><td>\u5E74\u7EA7</td></tr><tr><td>score</td><td>int</td><td>\u8BD5\u5377\u603B\u5206(\u5343\u5206\u5236)</td></tr><tr><td>question_count</td><td>int</td><td>\u9898\u76EE\u6570\u91CF</td></tr><tr><td>suggest_time</td><td>int</td><td>\u5EFA\u8BAE\u65F6\u957F(\u5206\u949F)</td></tr><tr><td>limit_start_time</td><td>datetime</td><td>\u65F6\u6BB5\u8BD5\u5377 \u5F00\u59CB\u65F6\u95F4</td></tr><tr><td>limit_end_time</td><td>datetime</td><td>\u65F6\u6BB5\u8BD5\u5377 \u7ED3\u675F\u65F6\u95F4</td></tr><tr><td>frame_text_content_id</td><td>int</td><td>\u8BD5\u5377\u6846\u67B6 \u5185\u5BB9\u4E3AJSON</td></tr><tr><td>create_user</td><td>int</td><td></td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>deleted</td><td>bit</td><td></td></tr><tr><td>task_exam_id</td><td>int</td><td></td></tr></tbody></table><h3 id="_3-2-\u8BD5\u5377\u7B54\u6848\u8868" tabindex="-1"><a class="header-anchor" href="#_3-2-\u8BD5\u5377\u7B54\u6848\u8868" aria-hidden="true">#</a> 3.2 \u8BD5\u5377\u7B54\u6848\u8868</h3><ul><li>\u8868\u540D\uFF1At_exam_paper_answer</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>exam_paper_id</td><td>int</td><td></td></tr><tr><td>paper_name</td><td>varchar</td><td>\u8BD5\u5377\u540D\u79F0</td></tr><tr><td>paper_type</td><td>int</td><td>\u8BD5\u5377\u7C7B\u578B( 1.\u56FA\u5B9A\u8BD5\u5377 4.\u65F6\u6BB5\u8BD5\u5377 6.\u4EFB\u52A1\u8BD5\u5377 )</td></tr><tr><td>subject_id</td><td>int</td><td>\u5B66\u79D1</td></tr><tr><td>system_score</td><td>int</td><td>\u7CFB\u7EDF\u5224\u5B9A\u5F97\u5206</td></tr><tr><td>user_score</td><td>int</td><td>\u6700\u7EC8\u5F97\u5206(\u5343\u5206\u5236)</td></tr><tr><td>paper_score</td><td>int</td><td>\u8BD5\u5377\u603B\u5206</td></tr><tr><td>question_correct</td><td>int</td><td>\u505A\u5BF9\u9898\u76EE\u6570\u91CF</td></tr><tr><td>question_count</td><td>int</td><td>\u9898\u76EE\u603B\u6570\u91CF</td></tr><tr><td>do_time</td><td>int</td><td>\u505A\u9898\u65F6\u95F4(\u79D2)</td></tr><tr><td>status</td><td>int</td><td>\u8BD5\u5377\u72B6\u6001(1\u5F85\u5224\u5206 2\u5B8C\u6210)</td></tr><tr><td>create_user</td><td>int</td><td>\u5B66\u751F</td></tr><tr><td>create_time</td><td>datetime</td><td>\u63D0\u4EA4\u65F6\u95F4</td></tr><tr><td>task_exam_id</td><td>int</td><td></td></tr></tbody></table><h3 id="_3-3-\u8BD5\u5377\u9898\u76EE\u7B54\u6848\u8868" tabindex="-1"><a class="header-anchor" href="#_3-3-\u8BD5\u5377\u9898\u76EE\u7B54\u6848\u8868" aria-hidden="true">#</a> 3.3 \u8BD5\u5377\u9898\u76EE\u7B54\u6848\u8868</h3><ul><li>\u8868\u540D\uFF1At_exam_paper_question_customer_answer</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>question_id</td><td>int</td><td>\u9898\u76EEId</td></tr><tr><td>exam_paper_id</td><td>int</td><td>\u7B54\u6848Id</td></tr><tr><td>exam_paper_answer_id</td><td>int</td><td></td></tr><tr><td>question_type</td><td>int</td><td>\u9898\u578B</td></tr><tr><td>subject_id</td><td>int</td><td>\u5B66\u79D1</td></tr><tr><td>customer_score</td><td>int</td><td>\u5F97\u5206</td></tr><tr><td>question_score</td><td>int</td><td>\u9898\u76EE\u539F\u59CB\u5206\u6570</td></tr><tr><td>question_text_content_id</td><td>int</td><td>\u95EE\u9898\u5185\u5BB9</td></tr><tr><td>answer</td><td>varchar</td><td>\u505A\u9898\u7B54\u6848</td></tr><tr><td>text_content_id</td><td>int</td><td>\u505A\u9898\u5185\u5BB9</td></tr><tr><td>do_right</td><td>bit</td><td>\u662F\u5426\u6B63\u786E</td></tr><tr><td>create_user</td><td>int</td><td>\u505A\u9898\u4EBA</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>item_order</td><td>int</td><td></td></tr></tbody></table><h3 id="_3-4-\u6D88\u606F\u8868" tabindex="-1"><a class="header-anchor" href="#_3-4-\u6D88\u606F\u8868" aria-hidden="true">#</a> 3.4 \u6D88\u606F\u8868</h3><ul><li>\u8868\u540D\uFF1At_message</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>title</td><td>varchar</td><td>\u6807\u9898</td></tr><tr><td>content</td><td>varchar</td><td>\u5185\u5BB9</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>send_user_id</td><td>int</td><td>\u53D1\u9001\u8005\u7528\u6237ID</td></tr><tr><td>send_user_name</td><td>varchar</td><td>\u53D1\u9001\u8005\u7528\u6237\u540D</td></tr><tr><td>send_real_name</td><td>varchar</td><td>\u53D1\u9001\u8005\u771F\u5B9E\u59D3\u540D</td></tr><tr><td>receive_user_count</td><td>int</td><td>\u63A5\u6536\u4EBA\u6570</td></tr><tr><td>read_count</td><td>int</td><td>\u5DF2\u8BFB\u4EBA\u6570</td></tr></tbody></table><h3 id="_3-5-\u7528\u6237\u6D88\u606F\u8868" tabindex="-1"><a class="header-anchor" href="#_3-5-\u7528\u6237\u6D88\u606F\u8868" aria-hidden="true">#</a> 3.5 \u7528\u6237\u6D88\u606F\u8868</h3><ul><li>\u8868\u540D\uFF1At_message_user</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>message_id</td><td>int</td><td>\u6D88\u606F\u5185\u5BB9ID</td></tr><tr><td>receive_user_id</td><td>int</td><td>\u63A5\u6536\u4EBAID</td></tr><tr><td>receive_user_name</td><td>varchar</td><td>\u63A5\u6536\u4EBA\u7528\u6237\u540D</td></tr><tr><td>receive_real_name</td><td>varchar</td><td>\u63A5\u6536\u4EBA\u771F\u5B9E\u59D3\u540D</td></tr><tr><td>readed</td><td>bit</td><td>\u662F\u5426\u5DF2\u8BFB</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>read_time</td><td>datetime</td><td>\u9605\u8BFB\u65F6\u95F4</td></tr></tbody></table><h3 id="_3-6-\u9898\u76EE\u8868" tabindex="-1"><a class="header-anchor" href="#_3-6-\u9898\u76EE\u8868" aria-hidden="true">#</a> 3.6 \u9898\u76EE\u8868</h3><ul><li>\u8868\u540D\uFF1At_question</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>question_type</td><td>int</td><td>1.\u5355\u9009\u9898 2.\u591A\u9009\u9898 3.\u5224\u65AD\u9898 4.\u586B\u7A7A\u9898 5.\u7B80\u7B54\u9898</td></tr><tr><td>subject_id</td><td>int</td><td>\u5B66\u79D1</td></tr><tr><td>score</td><td>int</td><td>\u9898\u76EE\u603B\u5206(\u5343\u5206\u5236)</td></tr><tr><td>grade_level</td><td>int</td><td>\u7EA7\u522B</td></tr><tr><td>difficult</td><td>int</td><td>\u9898\u76EE\u96BE\u5EA6</td></tr><tr><td>correct</td><td>text</td><td>\u6B63\u786E\u7B54\u6848</td></tr><tr><td>info_text_content_id</td><td>int</td><td>\u9898\u76EE \u586B\u7A7A\u3001 \u9898\u5E72\u3001\u89E3\u6790\u3001\u7B54\u6848\u7B49\u4FE1\u606F</td></tr><tr><td>create_user</td><td>int</td><td>\u521B\u5EFA\u4EBA</td></tr><tr><td>status</td><td>int</td><td>1.\u6B63\u5E38</td></tr><tr><td>create_time</td><td>datetime</td><td>\u521B\u5EFA\u65F6\u95F4</td></tr><tr><td>deleted</td><td>bit</td><td></td></tr></tbody></table><h3 id="_3-7-\u5B66\u79D1\u8868" tabindex="-1"><a class="header-anchor" href="#_3-7-\u5B66\u79D1\u8868" aria-hidden="true">#</a> 3.7 \u5B66\u79D1\u8868</h3><ul><li>\u8868\u540D\uFF1At_subject</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>name</td><td>varchar</td><td>\u8BED\u6587 \u6570\u5B66 \u82F1\u8BED \u7B49</td></tr><tr><td>level</td><td>int</td><td>\u5E74\u7EA7 (1-12) \u5C0F\u5B66 \u521D\u4E2D \u9AD8\u4E2D \u5927\u5B66</td></tr><tr><td>level_name</td><td>varchar</td><td>\u4E00\u5E74\u7EA7\u3001\u4E8C\u5E74\u7EA7\u7B49</td></tr><tr><td>item_order</td><td>int</td><td>\u6392\u5E8F</td></tr><tr><td>deleted</td><td>bit</td><td></td></tr></tbody></table><h3 id="_3-8-\u4EFB\u52A1\u8868" tabindex="-1"><a class="header-anchor" href="#_3-8-\u4EFB\u52A1\u8868" aria-hidden="true">#</a> 3.8 \u4EFB\u52A1\u8868</h3><ul><li>\u8868\u540D\uFF1At_task_exam</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>title</td><td>varchar</td><td></td></tr><tr><td>grade_level</td><td>int</td><td>\u7EA7\u522B</td></tr><tr><td>frame_text_content_id</td><td>int</td><td>\u4EFB\u52A1\u6846\u67B6 \u5185\u5BB9\u4E3AJSON</td></tr><tr><td>create_user</td><td>int</td><td></td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>deleted</td><td>bit</td><td></td></tr><tr><td>create_user_name</td><td>varchar</td><td></td></tr></tbody></table><h3 id="_3-9-\u7528\u6237\u4EFB\u52A1\u8868" tabindex="-1"><a class="header-anchor" href="#_3-9-\u7528\u6237\u4EFB\u52A1\u8868" aria-hidden="true">#</a> 3.9 \u7528\u6237\u4EFB\u52A1\u8868</h3><ul><li>\u8868\u540D\uFF1At_task_exam_customer_answer</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>task_exam_id</td><td>int</td><td></td></tr><tr><td>create_user</td><td>int</td><td></td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>text_content_id</td><td>int</td><td>\u4EFB\u52A1\u5B8C\u6210\u60C5\u51B5(Json)</td></tr></tbody></table><h3 id="_3-10-\u6587\u672C\u8868" tabindex="-1"><a class="header-anchor" href="#_3-10-\u6587\u672C\u8868" aria-hidden="true">#</a> 3.10 \u6587\u672C\u8868</h3><ul><li>\u8868\u540D\uFF1At_text_content</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>content</td><td>text</td><td></td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr></tbody></table><h3 id="_3-11-\u7528\u6237\u8868" tabindex="-1"><a class="header-anchor" href="#_3-11-\u7528\u6237\u8868" aria-hidden="true">#</a> 3.11 \u7528\u6237\u8868</h3><ul><li>\u8868\u540D\uFF1At_user</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>user_uuid</td><td>varchar</td><td></td></tr><tr><td>user_name</td><td>varchar</td><td>\u7528\u6237\u540D</td></tr><tr><td>password</td><td>varchar</td><td></td></tr><tr><td>real_name</td><td>varchar</td><td>\u771F\u5B9E\u59D3\u540D</td></tr><tr><td>age</td><td>int</td><td></td></tr><tr><td>sex</td><td>int</td><td>1.\u7537 2\u5973</td></tr><tr><td>birth_day</td><td>datetime</td><td></td></tr><tr><td>user_level</td><td>int</td><td>\u5B66\u751F\u5E74\u7EA7(1-12)</td></tr><tr><td>phone</td><td>varchar</td><td></td></tr><tr><td>role</td><td>int</td><td>1.\u5B66\u751F 3.\u7BA1\u7406\u5458</td></tr><tr><td>status</td><td>int</td><td>1.\u542F\u7528 2\u7981\u7528</td></tr><tr><td>image_path</td><td>varchar</td><td>\u5934\u50CF\u5730\u5740</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>modify_time</td><td>datetime</td><td></td></tr><tr><td>last_active_time</td><td>datetime</td><td></td></tr><tr><td>deleted</td><td>bit</td><td>\u662F\u5426\u5220\u9664</td></tr><tr><td>wx_open_id</td><td>varchar</td><td>\u5FAE\u4FE1openId</td></tr></tbody></table><h3 id="_3-12-\u7528\u6237\u65E5\u5FD7\u8868" tabindex="-1"><a class="header-anchor" href="#_3-12-\u7528\u6237\u65E5\u5FD7\u8868" aria-hidden="true">#</a> 3.12 \u7528\u6237\u65E5\u5FD7\u8868</h3><ul><li>\u8868\u540D\uFF1At_user_event_log</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>user_id</td><td>int</td><td>\u7528\u6237id</td></tr><tr><td>user_name</td><td>varchar</td><td>\u7528\u6237\u540D</td></tr><tr><td>real_name</td><td>varchar</td><td>\u771F\u5B9E\u59D3\u540D</td></tr><tr><td>content</td><td>text</td><td>\u5185\u5BB9</td></tr><tr><td>create_time</td><td>datetime</td><td>\u65F6\u95F4</td></tr></tbody></table><h3 id="_3-13-\u7528\u6237token\u8868" tabindex="-1"><a class="header-anchor" href="#_3-13-\u7528\u6237token\u8868" aria-hidden="true">#</a> 3.13 \u7528\u6237Token\u8868</h3><ul><li>\u8868\u540D\uFF1At_user_token</li><li>\u5B57\u6BB5\u6CE8\u91CA\uFF1A</li></ul><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u7C7B\u578B</th><th>\u6CE8\u91CA</th></tr></thead><tbody><tr><td>id</td><td>int</td><td></td></tr><tr><td>token</td><td>varchar</td><td></td></tr><tr><td>user_id</td><td>int</td><td>\u7528\u6237Id</td></tr><tr><td>wx_open_id</td><td>varchar</td><td>\u5FAE\u4FE1openId</td></tr><tr><td>create_time</td><td>datetime</td><td></td></tr><tr><td>end_time</td><td>datetime</td><td></td></tr><tr><td>user_name</td><td>varchar</td><td>\u7528\u6237\u540D</td></tr></tbody></table>',40),h=[i];function n(_,l){return d(),r("div",null,h)}const s=t(a,[["render",n],["__file","database.html.vue"]]);export{s as default};
