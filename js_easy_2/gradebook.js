function getGrade(score1, score2, score3) {
	var average = (score1 + score2 + score3) / 3

	if (average >= 90 && average <= 100) {
		return 'A';
	} else if (average >= 80) {
		return 'B';
	} else if (average >= 70) {
		return 'C';
	} else if (average >= 60) {
		return 'D';
	} else {
		return 'F';
	}
}
