# AtCoder Beginner Contest 025
## A - 25個の文字列
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string s;
    int n;
    cin >> s >> n;
    cout << s[(n - 1) / 5] << s[(n - 1) % 5] << endl;
}
```
