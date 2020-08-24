# AtCoder Beginner Contest 007
## D - 禁止された数字
```cpp
#include <algorithm>
#include <iostream>
#include <string>

using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    string a8s = "0" + to_string(a);
    for (int i = a8s.size() - 1; i > 0; i--) {
        if (a8s[i] == '4') {
            a8s[i] = '5';
            for (int j = i + 1; j < static_cast<int>(a8s.size()); j++) {
                a8s[j] = '0';
            }
        } else if (a8s[i] == '9') {
            for (int j = i; j < static_cast<int>(a8s.size()); j++) {
                a8s[j] = '0';
            }
            for (int j = i - 1; j >= 0; j--) {
                if (a8s[j] == '9') {
                    a8s[j] = '0';
                } else {
                    a8s[j] += 1;
                    break;
                }
            }
        }
    }

    long long a8 = 0;
    for (long long i = a8s.size() - 1, j = 1; i >= 0; i--, j *= 8) {
        a8 += (a8s[i] - (a8s[i] <= '3' ? '0' : '1')) * j;
    }

    string b8s = "0" + to_string(b);
    for (int i = b8s.size() - 1; i > 0; i--) {
        if (b8s[i] == '4') {
            b8s[i] = '3';
            for (int j = i + 1; j < static_cast<int>(b8s.size()); j++) {
                b8s[j] = '8';
            }
        } else if (b8s[i] == '9') {
            for (int j = i; j < static_cast<int>(b8s.size()); j++) {
                b8s[j] = '8';
            }
        }
    }

    long long b8 = 0;
    for (long long i = b8s.size() - 1, j = 1; i >= 0; i--, j *= 8) {
        b8 += (b8s[i] - (b8s[i] <= '3' ? '0' : '1')) * j;
    }

    cout << (b - a + 1) - max(b8 - a8 + 1, 0LL) << endl;
}
```
