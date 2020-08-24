# AtCoder Beginner Contest 084
## C - Special Trains
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> c(n - 1), s(n - 1), f(n - 1);
    for (int i = 0; i < n - 1; i++) {
        cin >> c[i] >> s[i] >> f[i];
    }

    for (int i = 0; i < n - 1; i++) {
        int cur = s[i] + c[i];
        for (int j = i + 1; j < n - 1; j++) {
            if (s[j] <= cur) {
                if ((cur - s[j]) % f[j] == 0) {
                    cur += c[j];
                } else {
                    cur += f[j] - ((cur - s[j]) % f[j]) + c[j];
                }
            } else {
                cur = s[j] + c[j];
            }
        }

        cout << cur << endl;
    }

    cout << "0" << endl;
}
```
