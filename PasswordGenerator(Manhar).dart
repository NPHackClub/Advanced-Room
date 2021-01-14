import 'dart:math';

void main() {
String randPass = '';
	String letters = 'abcdefghijklmnopqrstuvwxyz';
	String numbers = '1234567890';
	String specialChars = '!@#%?{}()[]';
	for(int i=0;i<3;i++){
	var randNum = new Random();
	randPass += letters.split('')[randNum.nextInt(letters.length)];
	randPass += numbers.split('')[randNum.nextInt(numbers.length)];
	randPass += specialChars.split('')[randNum.nextInt(specialChars.length)];
	}
	print(randPass);

}
