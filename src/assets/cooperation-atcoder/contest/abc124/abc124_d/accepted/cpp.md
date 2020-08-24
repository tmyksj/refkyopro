# AtCoder Beginner Contest 124
## D - Handstand
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    string s;
    cin >> s;

    vector<int> sv(2, 0);
    for (int i = 0, prev = '0'; i < n; i++) {
        if (prev == s[i]) {
            sv[sv.size() - 1]++;
        } else {
            prev = s[i];
            sv.push_back(sv[sv.size() - 1] + 1);
        }
    }

    int max = 0;
    for (int i = (s[0] == '0' ? 1 : 2); i < static_cast<int>(sv.size()); i++) {
        int l = (i % 2 == 0 ? (i - 2 * k - 1) : (i - 2 * k));
        if (l < 0) {
            l = 0;
        }

        if (max < sv[i] - sv[l]) {
            max = sv[i] - sv[l];
        }
    }

    cout << max << endl;
}
```
