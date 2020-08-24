# AtCoder Beginner Contest 089
## C - March
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> cnt(5, 0);
    for (int i = 0; i < n; i++) {
        string s;
        cin >> s;

        if (s[0] == 'M') { cnt[0]++; }
        if (s[0] == 'A') { cnt[1]++; }
        if (s[0] == 'R') { cnt[2]++; }
        if (s[0] == 'C') { cnt[3]++; }
        if (s[0] == 'H') { cnt[4]++; }
    }

    long long res = 0;
    for (int i = 0; i < 5; i++) {
        for (int j = i + 1; j < 5; j++) {
            for (int k = j + 1; k < 5; k++) {
                long long r = 1;
                r *= cnt[i];
                r *= cnt[j];
                r *= cnt[k];
                res += r;
            }
        }
    }

    cout << res << endl;
}
```
