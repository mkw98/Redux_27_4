import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';	
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

const boundAddComment = text => dispatch(addComment(text));

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	}
}
const boundRemoveComment = id => dispatch(removeComment(id));

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		id: id,
		text: text
	}
}
const boundEditComment = (id, text) => dispatch(editComment(id, text));

function thumbUpComment(id, votes) {
	return {
		type: THUMB_UP_COMMENT,
		id: id
	}
}
const boundThumbUpComment = id => dispatch(thumbUpComment(id));

function thumbDownComment(id, votes) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id
	}
}
const boundThumbDownComment = id => dispatch(thumbDownComment(id));
