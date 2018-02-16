export default function getRatingClass(rating) {
	if (rating < 3) {
		return 'low';
	} else if (rating < 7) {
		return 'medium';
	}
	return 'high';
}
