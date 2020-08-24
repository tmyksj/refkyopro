# AtCoder Beginner Contest 137
## C - Green Bin
```cpp
#include <algorithm>
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
        sort(s[i].begin(), s[i].end());
    }

    sort(s.begin(), s.end());

    vector<long long> cnt(1, 1);
    for (int i = 1; i < n; i++) {
        if (s[i - 1] == s[i]) {
            cnt[cnt.size() - 1]++;
        } else {
            cnt.push_back(1);
        }
    }

    long long sum = 0;
    for (int i = 0; i < static_cast<int>(cnt.size()); i++) {
        sum += cnt[i] * (cnt[i] - 1) / 2;
    }

    cout << sum << endl;
}
```
