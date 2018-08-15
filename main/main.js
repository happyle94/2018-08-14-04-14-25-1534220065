module.exports = function main(input) {
    var ledShow = '';//返回的打印结果
	var line1 = [];//第一行打印
	var line2 = [];//第二行打印
	var line3 = [];//第三行打印
	var led1 = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
	var led2 = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
	var led3 = ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|'];
	for (var i = 0; i < input.length; i++)
	{
		if (i==input.length-1)//最后一位无需空格
		{
			line1.push(led1[input[i]]);
			line2.push(led2[input[i]]);
			line3.push(led3[input[i]]);
		}
		else{
		line1.push(led1[input[i]]+' ');
		line2.push(led2[input[i]]+' ');
		line3.push(led3[input[i]]+' ');
		}
	}
	line1.push('\n');
	line2.push('\n');
	line3.push('\n');
	ledShow=line1.join('')+line2.join('')+line3.join('');
	return ledShow;
};