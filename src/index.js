// @ts-check
"use strict";

/**
 * @typedef {number | string} ID
 */

/**
 * @typedef {'WORK' | 'PLAY' | 'URGENT'} Category
 */

/**
 * @typedef {string} Tag
 */

/**
 * Create todo
 * @constructor
 * @param {Object} todoInfo
 * @param {ID} todoInfo.id - 할일 아이디
 * @param {string} todoInfo.content - 내용
 * @param {Category} todoInfo.category - 카테고리
 * @param {boolean} [todoInfo.isComplete=false] - 완료여부
 * @param {Tag[]} [todoInfo.tags=[]] - 태그들
 * @throws Will throw an error if content if null
 */
function Todo({ content, category, isComplete = false, tags = [] }) {}

/**
 * @typedef {(Todo | undefined | null)} OptionalTodo
 */

/**
 * 할일 목록
 * @type {Todo[]}
 */
const todos = [];

/**
 * 모든 할 일을 조회 결과를 리턴한다
 *
 * @async
 * @returns {Promise<Todo[]>}
 */
function findAll() {}

/**
 * ID를 기반으로 특정 할 일을 리턴한다
 *
 * @async
 * @param {ID} id
 * @returns {Promise<OptionalTodo>}
 */
function findOne(id) {}

/**
 * ID를 제외한 모든 속성을 수정한다
 *
 * @async
 * @param {ID} id
 * @param {Object} updateDto
 * @param {string} [updateDto.content] - 내용
 * @param {Category} [updateDto.category] - 카테고리
 * @param {boolean} [updateDto.isComplete] - 완료여부
 * @param {Tag[]} [updateDto.tags] - 태그들
 * @returns  {Promise<OptionalTodo>}
 */
function updateById(id, {}) {}

/**
 * 특정 할 일의 특정 태그를 수정한다
 * 
 * @async
 * @param {ID} id
 * @param {Tag} tag
 * @param {Tag} newTag
 * @returns {Promise<OptionalTodo>}
 */
function updateTagById(id, tag, newTag) {}

/**
 * ID를 기반으로 특정 할 일을 삭제한다
 *
 * @async
 * @param {ID} id
 * @returns {Promise<void>}
 */
function deleteById(id) {}

/**
 * 모든 할 일을 제거한다
 *
 * @async
 * @returns {Promise<void>}
 */
function deleteAll() {}

/**
 * 특정 할 일의 특정 태그를 삭제한다
 * 
 * @async
 * @param {ID} id 
 * @param {Tag} tag
 * @returns {Promise<void>}
 */
function deleteTagById(id, tag) {}

/**
 * 특정 할 일의 모든 태그를 제거한다
 * 
 * @async
 * @param {ID} id
 * @returns {Promise<void>}
 */
function deleteAllTagsById(id) {}