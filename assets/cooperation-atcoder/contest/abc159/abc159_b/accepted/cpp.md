# AtCoder Beginner Contest 159
## B - String Palindrome
```cpp
#include <iostream>
#include <string>

using namespace std;

bool is_palindrome(string s, int b, int e) {
    bool res = true;
    for (int i = b; i <= e; i++) {
        res = res && s[i] == s[e - i];
    }
    return res;
}

int main() {
    string s;
    cin >> s;

    int n = s.size();
    bool res = is_palindrome(s, 0, n - 1);
    res = res && is_palindrome(s, 0, n / 2 - 1);
    res = res && is_palindrome(s, n / 2 + 1, n - 1);

    cout << (res ? "Yes" : "No") << endl;
}
```
