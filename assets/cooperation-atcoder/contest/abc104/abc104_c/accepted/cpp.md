# AtCoder Beginner Contest 104
## C - All Green
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int d, g;
    cin >> d >> g;

    vector<int> p(d), c(d);
    for (int i = 0; i < d; i++) {
        cin >> p[i] >> c[i];
    }

    int res = 1000000000;
    for (int i = 0; i < (1 << d); i++) {
        int solved = 0, score = 0, rem = -1;
        for (int j = d - 1; j >= 0; j--) {
            if ((i & (1 << j)) > 0) {
                solved += p[j];
                score += 100 * (j + 1) * p[j] + c[j];
            } else if (rem == -1) {
                rem = j;
            }
        }

        if (score < g && rem != -1 && (g - score + 100 * rem) / (100 * (rem + 1)) <= p[rem]) {
            int s = (g - score + 100 * rem) / (100 * (rem + 1));
            solved += s;
            score += 100 * (rem + 1) * s;
        }

        if (score >= g && res > solved) {
            res = solved;
        }
    }

    cout << res << endl;
}
```
