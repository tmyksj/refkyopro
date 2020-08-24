# 第二回 アルゴリズム実技検定
## C - 山崩し
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<string> s(n);
    for (int i = 0; i < n; i++) {
        cin >> s[i];
    }

    for (int i = 0; i < n - 1; i++) {
        for (int j = i + 1; j < 2 * n - i - 2; j++) {
            if (s[n - i - 1][j - 1] == 'X' || s[n - i - 1][j] == 'X' || s[n - i - 1][j + 1] == 'X') {
                s[n - i - 2][j] = 'X';
            }
        }
    }

    for (int i = 0; i < n; i++) {
        cout << s[i] << endl;
    }
}
```
