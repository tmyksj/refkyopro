# AtCoder Grand Contest 031
## A - Colorful Subsequence
```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    vector<int> cnt(26, 0);
    for (int i = 0; i < n; i++) {
        cnt[s[i] - 'a']++;
    }

    long long res = 1;
    for (int i = 0; i < 26; i++) {
        res *= cnt[i] + 1LL;
        res %= 1000000007;
    }

    cout << res - 1 << endl;
}
```
