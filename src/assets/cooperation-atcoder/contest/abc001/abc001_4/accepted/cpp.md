# AtCoder Beginner Contest 001
## D - 感雨時刻の整理
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> t(24 * 60 + 1, 0);
    for (int i = 0; i < n; i++) {
        string se;
        cin >> se;

        int s = 600 * (se[0] - '0') + 60 * (se[1] - '0') + 10 * (se[2] - '0') + (se[3] - '0');
        int e = 600 * (se[5] - '0') + 60 * (se[6] - '0') + 10 * (se[7] - '0') + (se[8] - '0');

        t[s - s % 5]++;
        t[e + (5 - e % 5) % 5]--;
    }

    for (int i = 1; i < static_cast<int>(t.size()); i++) {
        t[i] += t[i - 1];
    }

    for (int i = 0; i < static_cast<int>(t.size()); i++) {
        int h = i / 60;
        int m = i % 60;

        if (t[i] > 0 && (i == 0 || t[i - 1] == 0)) {
            cout << (h < 10 ? "0" : "") << h << (m < 10 ? "0" : "") << m << "-";
        } else if (t[i] == 0 && i > 0 && t[i - 1] > 0) {
            cout << (h < 10 ? "0" : "") << h << (m < 10 ? "0" : "") << m << endl;
        }
    }
}
```
