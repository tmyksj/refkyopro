# AtCoder Beginner Contest 096
## D - Five, Five Everywhere
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    vector<bool> prime(55556, true);
    for (int i = 2; i < static_cast<int>(prime.size()); i++) {
        if (prime[i]) {
            for (int j = 2 * i; j < static_cast<int>(prime.size()); j += i) {
                prime[j] = false;
            }
        }
    }

    int n;
    cin >> n;

    for (int i = 0, pi = 2; i < n; i++) {
        for (pi++; !prime[pi] || pi % 5 != 1; pi++) {}
        cout << (i == 0 ? "" : " ") << pi;
    }
    cout << endl;
}
```
